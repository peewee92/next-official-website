"use client"; // This is a client component

import { useEffect, useRef, useState } from 'react';

const useInView = (
    options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: 1,
    },
    triggerOnce = false, // 是否只触发一次
) => {
    const [inView, setInView] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (triggerOnce) {
                        // 触发一次后结束监听
                        observer.unobserve(entry.target);
                    }
                } else {
                    setInView(false);
                }
            });
        }, options);

        if (targetRef.current) {
            // 开始监听
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                // 组件卸载时结束监听
                observer.unobserve(targetRef.current);
            }
        };
    }, [options, triggerOnce]);

    return [targetRef, inView];
};

export default useInView;