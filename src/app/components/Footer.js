
export default function Footer() {
    const signal = <div>
       <svg className="m-1 w-4 fill-green-600" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M544 0c-17.67 0-32 14.33-32 31.1V480C512 497.7 526.3 512 544 512s32-14.33 32-31.1V31.1C576 14.33 561.7 0 544 0zM160 288C142.3 288 128 302.3 128 319.1v160C128 497.7 142.3 512 160 512s32-14.33 32-31.1V319.1C192 302.3 177.7 288 160 288zM32 384C14.33 384 0 398.3 0 415.1v64C0 497.7 14.33 512 31.1 512S64 497.7 64 480V415.1C64 398.3 49.67 384 32 384zM416 96c-17.67 0-32 14.33-32 31.1V480C384 497.7 398.3 512 416 512s32-14.33 32-31.1V127.1C448 110.3 433.7 96 416 96zM288 192C270.3 192 256 206.3 256 223.1v256C256 497.7 270.3 512 288 512s32-14.33 32-31.1V223.1C320 206.3 305.7 192 288 192z"/></svg>
    </div>

    return (
        <div className="bg-gray-800 text-white mx-auto text-center shadow-lg py-6 px-6">
            <p className="font-semibold pb-10">GConnect Monitoring System</p>
            <p className="text-gray-400">Copyright Universitas Gadjah Mada 2024</p>
        </div>
    )
}