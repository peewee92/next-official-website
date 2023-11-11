// import './network.less'

const valueStyle = {
  color: '#6b185d',
  lineHeight: '4rem',
  fontWeight: '700'
}
export default function Index() {
  return (
    <div class="container mx-auto w-full h-full">
      <p class="pl-10 text-5xl font-Zen">network</p>
      <div class="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8 pt-6">
        <div class="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
          {/* <div class="flex justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
                Coin Name:
              </h2>
              <p class="mt-2 leading-6 text-white text-3xl">
                GoodMorningNetWrok
              </p>
            </div>
          </div> */}
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
                Pow Algorithm
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>Rwahash</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
                Block Time
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>1 mins</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
                Max Supply
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>10B</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
                Network Port
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>6666</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
              Rpc Port
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>6667</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
                Production Reduction Rules
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>each 1 months,1%</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
              Block Initial Reward
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>3000 GM</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
              Block Reward Structure
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>70%[POW]</p>
            </div>
          </div>
          <div class="flex sm:justify-center">
            <div class="ml-6">
              <h2 class="font-semibold leading-6 text-white text-2xl">
              About 15% [Dev Team]
              </h2>
              <p class="mt-6  leading-6 text-white text-5xl" style={valueStyle}>funding, marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
