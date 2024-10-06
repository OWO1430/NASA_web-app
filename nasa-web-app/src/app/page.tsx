import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        paddingTop: '100px',
      }}
    >
      <Image
        className="dark:invert items-center justify-items-center"
        src="/texture/solar-system.png"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
        style={{
          paddingBottom: "40px",
        }}
      />

      <p style={{ paddingBottom: "40px" }}>Use 'WASD' to control</p>

      <div
        // className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        style={{
          display: 'flex',
          justifyItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {/*<a href="https://www.flaticon.com/free-icons/universe" title="universe icons">由Freepik建立的宇宙圖示-Flaticon</a>*/}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="items-center justify-items-center">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="./game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Game version
            </a>
            <p style={{ fontSize: 14, textAlign: 'center' }}>Complete missions</p>
          </div>
          <div>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="./explore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore version
            </a>
            <p style={{ fontSize: 14, textAlign: 'center' }}>Explore the outer space</p>
          </div>
        </div>
      </div>
    </div>
  );
}