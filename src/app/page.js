"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-white w-full p-10 md:p-20 min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-20 " style={{ height: "60vh" }}>
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl mt-20 md:mt-0 md:text-5xl leading-snug">
            Solving<br />World`s biggest problems<br /> with Technology
          </h1>
          <p className="text-lg mt-6">Making Earth Liveable again.</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/imagebanner.png"
            alt="Hero"
            className="rounded-lg shadow-lg object-cover max-h-[500px] mx-auto"
          />
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full py-20">
        <Link href="/necrozma-labs-research-suite" className="w-full">
  <div className="w-full h-[50vh] bg-gray-900 rounded-xl shadow-lg mb-40 mt-20 md:mt-0 p-8 relative overflow-hidden">
    
    {/* Left-top SVG */}
    <svg
      className="absolute top-0 left-0"
      fill="#d3d3d3"
      height="100px"
      width="100px"
      viewBox="0 0 32 32"
    >
      <g> <path d="M23.8,25l-1.5-1.6C20.2,21,19,17.8,19,14.6c0-1.9,1-3.7,2.6-4.8c0.4-0.2,0.5-0.7,0.4-1.1C21.8,8.3,21.4,8,21,8H11 c-0.4,0-0.8,0.3-1,0.7c-0.1,0.4,0,0.9,0.4,1.1c1.6,1.1,2.6,2.9,2.6,4.8c0,3.2-1.2,6.3-3.3,8.8L8.2,25c-0.8,0.9-1,2.1-0.5,3.2 c0.5,1.1,1.5,1.8,2.7,1.8h11.1c1.2,0,2.2-0.7,2.7-1.8C24.8,27.1,24.6,25.9,23.8,25z M13.5,10h5c-1,1.3-1.5,2.9-1.5,4.6 c0,3.4,1.2,6.7,3.3,9.4h-8.5c2.1-2.7,3.3-6,3.3-9.4C15,12.9,14.5,11.3,13.5,10z"></path> <path d="M19,3c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C18,2.6,18.4,3,19,3z"></path> <path d="M13,4c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C12,3.6,12.4,4,13,4z"></path> <path d="M16,7c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v1C15,6.6,15.4,7,16,7z"></path> </g> 
    </svg>

    {/* Right-bottom SVG */}
    <svg
      className="absolute bottom-0 right-0"
      height="150px"
      width="150px"
      viewBox="0 0 32 32"
      fill="#d3d3d3"
    >
<g id="SVGRepo_iconCarrier"> <path d="M10 27.4201H7C6.73478 27.4201 6.48043 27.3147 6.29289 27.1272C6.10536 26.9397 6 26.6853 6 26.4201C6 26.1549 6.10536 25.9005 6.29289 25.713C6.48043 25.5255 6.73478 25.4201 7 25.4201H9.23L10 23.1001C10.0417 22.9752 10.1078 22.8597 10.1943 22.7603C10.2808 22.661 10.3861 22.5797 10.5041 22.5212C10.6221 22.4626 10.7505 22.428 10.8819 22.4192C11.0134 22.4104 11.1453 22.4277 11.27 22.4701C11.52 22.5545 11.7265 22.7343 11.8445 22.9703C11.9625 23.2063 11.9825 23.4794 11.9 23.7301L10.9 26.7301C10.8375 26.9227 10.718 27.0918 10.5573 27.215C10.3966 27.3382 10.2022 27.4097 10 27.4201Z" fill="#ffffff"></path> <path d="M6 28.42C5.60444 28.42 5.21776 28.3027 4.88886 28.083C4.55996 27.8632 4.30362 27.5509 4.15224 27.1854C4.00087 26.82 3.96126 26.4178 4.03843 26.0299C4.1156 25.6419 4.30608 25.2855 4.58579 25.0058C4.86549 24.7261 5.22186 24.5356 5.60982 24.4585C5.99778 24.3813 6.39992 24.4209 6.76537 24.5723C7.13082 24.7237 7.44318 24.98 7.66294 25.3089C7.8827 25.6378 8 26.0245 8 26.42C8 26.9505 7.78929 27.4592 7.41421 27.8343C7.03914 28.2093 6.53043 28.42 6 28.42Z" fill="#ffffff"></path> <path d="M9 7.42006C8.86769 7.41951 8.73681 7.39271 8.61493 7.34122C8.49306 7.28972 8.38261 7.21455 8.29 7.12006L6.59 5.42006H5C4.73478 5.42006 4.48043 5.3147 4.29289 5.12717C4.10536 4.93963 4 4.68528 4 4.42006C4 4.15484 4.10536 3.90049 4.29289 3.71295C4.48043 3.52542 4.73478 3.42006 5 3.42006H7C7.13161 3.4193 7.26207 3.44452 7.38391 3.49429C7.50574 3.54405 7.61656 3.61738 7.71 3.71006L9.71 5.71006C9.85103 5.84993 9.94721 6.02863 9.98628 6.22338C10.0253 6.41813 10.0055 6.6201 9.92937 6.80354C9.8532 6.98699 9.72413 7.14359 9.55861 7.25339C9.39309 7.36319 9.19862 7.42122 9 7.42006Z" fill="#ffffff"></path> <path d="M4 6.42004C3.60444 6.42004 3.21776 6.30275 2.88886 6.08298C2.55996 5.86322 2.30362 5.55086 2.15224 5.18541C2.00087 4.81996 1.96126 4.41783 2.03843 4.02986C2.1156 3.6419 2.30608 3.28554 2.58579 3.00583C2.86549 2.72613 3.22186 2.53564 3.60982 2.45847C3.99778 2.3813 4.39992 2.42091 4.76537 2.57229C5.13082 2.72366 5.44318 2.98001 5.66294 3.3089C5.8827 3.6378 6 4.02448 6 4.42005C6 4.95048 5.78929 5.45919 5.41421 5.83426C5.03914 6.20933 4.53043 6.42004 4 6.42004Z" fill="#ffffff"></path> <path d="M21.95 6.42004H23.95L24.95 4.42004H26.95" fill="#ffffff"></path> <path d="M24 7.42008H22C21.7348 7.42008 21.4804 7.31472 21.2929 7.12718C21.1054 6.93965 21 6.68529 21 6.42008C21 6.15486 21.1054 5.9005 21.2929 5.71297C21.4804 5.52543 21.7348 5.42008 22 5.42008H23.38L24.06 4.00008C24.1424 3.82176 24.2755 3.67167 24.4427 3.56852C24.6098 3.46537 24.8037 3.41374 25 3.42008H27C27.2652 3.42008 27.5196 3.52543 27.7071 3.71297C27.8946 3.90051 28 4.15486 28 4.42008C28 4.68529 27.8946 4.93965 27.7071 5.12718C27.5196 5.31472 27.2652 5.42008 27 5.42008H25.57L24.85 6.86008C24.7714 7.02097 24.6511 7.15781 24.5016 7.25632C24.3521 7.35482 24.1788 7.41138 24 7.42008Z" fill="#ffffff"></path> <path d="M28.05 6.59009C27.6544 6.59009 27.2678 6.47279 26.9389 6.25303C26.61 6.03327 26.3536 5.72091 26.2022 5.35546C26.0509 4.99 26.0113 4.58787 26.0884 4.19991C26.1656 3.81195 26.3561 3.45558 26.6358 3.17588C26.9155 2.89617 27.2719 2.70569 27.6598 2.62852C28.0478 2.55135 28.4499 2.59095 28.8154 2.74233C29.1808 2.8937 29.4932 3.15005 29.7129 3.47895C29.9327 3.80785 30.05 4.19453 30.05 4.59009C30.05 5.12052 29.8393 5.62923 29.4642 6.0043C29.0891 6.37937 28.5804 6.59009 28.05 6.59009Z" fill="#ffffff"></path> <path d="M28.27 24.3001L24.27 20.3001L23 18.6601C22.9115 18.5535 22.8018 18.4664 22.6778 18.4044C22.5539 18.3424 22.4184 18.3069 22.28 18.3001C22.1424 18.2926 22.0048 18.3136 21.8758 18.3617C21.7467 18.4099 21.629 18.4843 21.53 18.5801L18.36 21.7201C18.2655 21.8127 18.1903 21.9231 18.1388 22.045C18.0873 22.1669 18.0605 22.2978 18.06 22.4301C18.0592 22.5617 18.0845 22.6921 18.1342 22.814C18.184 22.9358 18.2573 23.0466 18.35 23.1401L23.88 28.7001C24.4421 29.2628 25.2046 29.5794 26 29.5801C26.7954 29.5794 27.5579 29.2628 28.12 28.7001L28.29 28.5301C28.8461 27.9653 29.1561 27.2035 29.1524 26.4109C29.1486 25.6184 28.8314 24.8595 28.27 24.3001Z" fill="#ffffff"></path> <path d="M15.95 25.42C22.0251 25.42 26.95 20.4952 26.95 14.42C26.95 8.34491 22.0251 3.42004 15.95 3.42004C9.87486 3.42004 4.95 8.34491 4.95 14.42C4.95 20.4952 9.87486 25.42 15.95 25.42Z" fill="#ffffff"></path> <path d="M15.95 21.42C19.816 21.42 22.95 18.286 22.95 14.42C22.95 10.5541 19.816 7.42004 15.95 7.42004C12.084 7.42004 8.95 10.5541 8.95 14.42C8.95 18.286 12.084 21.42 15.95 21.42Z" fill="#ffffff"></path> <path d="M10 27.5H7C6.73478 27.5 6.48043 27.3947 6.29289 27.2071C6.10536 27.0196 6 26.7652 6 26.5C6 26.2348 6.10536 25.9804 6.29289 25.7929C6.48043 25.6054 6.73478 25.5 7 25.5H9.28L10.05 23.18C10.1349 22.9281 10.3164 22.7201 10.5545 22.602C10.7927 22.4838 11.068 22.4651 11.32 22.55C11.572 22.6349 11.7799 22.8164 11.898 23.0545C12.0162 23.2927 12.0349 23.5681 11.95 23.82L10.95 26.82C10.8829 27.0186 10.7551 27.1911 10.5846 27.3132C10.4142 27.4352 10.2096 27.5005 10 27.5Z" fill="#ffffff"></path> <path d="M6 28.5C5.60444 28.5 5.21776 28.3827 4.88886 28.1629C4.55996 27.9432 4.30362 27.6308 4.15224 27.2654C4.00087 26.8999 3.96126 26.4978 4.03843 26.1098C4.1156 25.7219 4.30608 25.3655 4.58579 25.0858C4.86549 24.8061 5.22186 24.6156 5.60982 24.5384C5.99778 24.4613 6.39992 24.5009 6.76537 24.6522C7.13082 24.8036 7.44318 25.06 7.66294 25.3889C7.8827 25.7178 8 26.1044 8 26.5C8 27.0304 7.78929 27.5391 7.41421 27.9142C7.03914 28.2893 6.53043 28.5 6 28.5Z" fill="#ffffff"></path> <path d="M9 7.50002C8.86839 7.50078 8.73793 7.47555 8.61609 7.42579C8.49426 7.37602 8.38344 7.3027 8.29 7.21002L6.59 5.50002H5C4.73478 5.50002 4.48043 5.39466 4.29289 5.20712C4.10536 5.01959 4 4.76523 4 4.50002C4 4.2348 4.10536 3.98045 4.29289 3.79291C4.48043 3.60537 4.73478 3.50002 5 3.50002H7C7.13161 3.49926 7.26207 3.52448 7.38391 3.57425C7.50574 3.62401 7.61656 3.69734 7.71 3.79002L9.71 5.79002C9.80373 5.88298 9.87812 5.99358 9.92889 6.11544C9.97966 6.2373 10.0058 6.368 10.0058 6.50002C10.0058 6.63203 9.97966 6.76273 9.92889 6.88459C9.87812 7.00645 9.80373 7.11705 9.71 7.21002C9.61656 7.3027 9.50574 7.37602 9.38391 7.42579C9.26207 7.47555 9.13161 7.50078 9 7.50002Z" fill="#ffffff"></path> <path d="M4 6.5C3.60444 6.5 3.21776 6.3827 2.88886 6.16294C2.55996 5.94318 2.30362 5.63082 2.15224 5.26537C2.00087 4.89992 1.96126 4.49778 2.03843 4.10982C2.1156 3.72186 2.30608 3.36549 2.58579 3.08579C2.86549 2.80608 3.22186 2.6156 3.60982 2.53843C3.99778 2.46126 4.39992 2.50087 4.76537 2.65224C5.13082 2.80362 5.44318 3.05996 5.66294 3.38886C5.8827 3.71776 6 4.10444 6 4.5C6 5.03043 5.78929 5.53914 5.41421 5.91421C5.03914 6.28929 4.53043 6.5 4 6.5Z" fill="#ffffff"></path> <path d="M5 14.5C5 17.4174 6.15893 20.2153 8.22183 22.2782C10.2847 24.3411 13.0826 25.5 16 25.5V3.5C13.0826 3.5 10.2847 4.65893 8.22183 6.72183C6.15893 8.78473 5 11.5826 5 14.5Z" fill="#ffffff"></path> <path d="M9 14.5C9 16.3565 9.7375 18.137 11.0503 19.4497C12.363 20.7625 14.1435 21.5 16 21.5V7.5C14.1435 7.5 12.363 8.2375 11.0503 9.55025C9.7375 10.863 9 12.6435 9 14.5Z" fill="#ffffff"></path> </g>
    </svg>

    {/* Center Content */}
    <div className="flex flex-col items-center justify-center h-full text-center z-10 relative">
      <h2 className="text-2xl md:text-4xl font-bold">
        Necrozma Labs Research Suite
      </h2>

      <button className="mt-6 px-6 py-3 text-lg font-semibold bg-gray-800 text-white rounded-lg hover:bg-gray-950 transition">
        Created for researchers, by researchers
      </button>
    </div>


    <svg
      className="absolute -top-20 -translate-y-10 right-10"
      fill="#d3d3d3"
      height="200px"
      width="200px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 247.038 247.038"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <g>
              <path d="M104.564,63.636l-32.09-18.528c-1.289-0.746-2.877-0.734-4.158,0.024L35.801,64.393 c-1.956,1.158-2.603,3.685-1.444,5.641c0.768,1.297,2.139,2.019,3.547,2.019c0.714,0,1.435-0.185,2.095-0.575l30.443-18.033 l30.005,17.324c1.968,1.134,4.485,0.458,5.625-1.508C107.209,67.291,106.535,64.774,104.564,63.636z"></path>
              <path d="M232.587,52.017l-51.789-29.901c0.229-1.162,0.363-2.36,0.363-3.589C181.16,8.311,172.85,0,162.633,0 c-10.217,0-18.528,8.311-18.528,18.528c0,10.217,8.311,18.528,18.528,18.528c6.03,0,11.344-2.939,14.73-7.413L226.41,57.96 v57.007l-49.367,28.502l-49.368-28.502V55.584c0-1.423-0.766-2.614-1.863-3.354c-0.096-0.067-0.174-0.153-0.276-0.212 l-0.27-0.156c-0.048-0.021-0.085-0.057-0.133-0.077L72.051,21.137c-1.275-0.736-2.843-0.736-4.117,0l-53.485,30.88 c-1.275,0.736-2.059,2.095-2.059,3.566v61.76c0,1.472,0.784,2.831,2.059,3.566l51.466,29.715v61.417 c0,1.472,0.784,2.831,2.059,3.566l53.485,30.88c0.637,0.368,1.347,0.551,2.059,0.551c0.712,0,1.421-0.183,2.059-0.551 l49.726-28.71c3.247,2.801,7.419,4.557,12.034,4.557c10.217,0,18.528-8.311,18.528-18.528c0-10.217-8.311-18.528-18.528-18.528 c-10.217,0-18.528,8.311-18.528,18.528c0,2.605,0.552,5.079,1.526,7.33l-46.816,27.03l-49.367-28.501v-59.087l49.367-28.503 l51.466,29.715c0.637,0.368,1.347,0.551,2.059,0.551c0.711,0,1.421-0.183,2.059-0.551l53.485-30.88 c1.275-0.736,2.059-2.095,2.059-3.566v-61.76C234.644,54.112,233.86,52.753,232.587,52.017z M162.633,28.821 c-5.675,0-10.293-4.618-10.293-10.293s4.618-10.293,10.293-10.293c5.675,0,10.293,4.618,10.293,10.293 S168.308,28.821,162.633,28.821z M187.336,193.513c5.675,0,10.293,4.618,10.293,10.293c0,5.675-4.618,10.293-10.293,10.293 c-2.371,0-4.53-0.838-6.272-2.191c-0.02-0.658-0.143-1.316-0.495-1.926c-0.584-1.008-1.533-1.665-2.582-1.926 c-0.594-1.299-0.945-2.731-0.945-4.25C177.042,198.131,181.66,193.513,187.336,193.513z M69.993,143.469l-49.368-28.502V57.96 l49.367-28.502L119.36,57.96l0.001,57.007L69.993,143.469z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>

  </div>
</Link>


        <h1 className="text-2xl md:text-4xl mb-10">Our Projects:</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Big Project */}
          <Link href="/openresearchlaboratory" className="md:w-4/5 w-full">
            <div className="relative h-60 md:h-[550px] rounded-lg overflow-hidden group">
              <Image
                src="/img1.jpeg"
                alt="Open Research Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl sm:text-3xl font-semibold text-center px-4">
                  We Redefined the Research...
                </p>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4 text-center md:text-left">
              Open Research Laboratory
            </h2>
          </Link>

          {/* Right Two Smaller Projects */}
          <div className="md:w-1/5 w-full flex flex-col gap-6">
            <Link href="/Nfuse">
              <div className="relative h-48 md:h-60 rounded-lg overflow-hidden group">
                <Image
                  src="/img2.jpeg"
                  alt="Nfuse "
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    Creating Unlimited Sustainable Energy
                  </p>
                </div>
              </div>
              <h2 className="text-lg font-bold mt-4 text-center md:text-left">
                Project Nfuse
              </h2>
            </Link>

            <Link href="/BuildY">
              <div className="relative h-48 md:h-60 rounded-lg overflow-hidden group">
                <Image
                  src="/img3.jpeg"
                  alt="Build Y"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    Innovating the way we build
                  </p>
                </div>
              </div>
              <h2 className="text-lg font-bold mt-4 text-center md:text-left">
                Build Y
              </h2>
            </Link>
          </div>
        </div>

        {/* Stories Section */}
        <h1 className="text-2xl md:text-4xl mt-28 mb-10">
          The Stories we stand for:
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              href: "/Stories/why-we-started",
              src: "/img4.jpeg",
              title: "Why We Started",
            },
            {
              href: "/Stories/why-sustainable-energy-matters",
              src: "/img5.jpeg",
              title: "Why Sustainable Energy Matters",
            },
            {
              href: "/Stories/how-we-work",
              src: "/img6.jpeg",
              title: "How We Work",
            },
          ].map((story) => (
            <Link key={story.href} href={story.href} className="flex flex-col">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src={story.src}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">{story.title}</h2>
            </Link>
          ))}
        </div>

        {/* CTA Section */}


        {/* Placeholder Section */}
        <div className=" flex mt-20 flex-col">
          <h2 className="text-white text-2xl md:text-4xl mb-20">Research Areas:</h2>

          <div className="px-4 md:px-12 py-8">
            <h2 className="text-white text-2xl md:text-4xl mb-6">Clean Energy</h2>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Image */}
              <img
                src="/susbanner.png"
                alt="image"
                className="w-full md:w-[60vw] px-10 h-auto rounded-lg"
              />

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center items-start">
                <h2 className="text-xl md:text-3xl text-white">
                  Our Mission: Clean Energy for a Better World
                </h2>

                <hr className="w-full border-gray-600 my-4" />

                <span className="text-base md:text-lg text-gray-300 mt-2">
                  We are Using AI to Lead the Change
                </span>

                <hr className="w-full border-gray-600 my-4" />

                <p className="text-base md:text-lg text-gray-300">
                  Project Nfuse: Our Flagship Initiative
                </p>

                <a
                  href="/Nfuse"
                  className="mt-6 px-6 py-2 border border-white text-white bg-black hover:bg-gray-900 transition rounded-lg"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 px-4 md:px-12 py-8">
            <h2 className="text-white text-2xl md:text-4xl mb-6">Artificial Intelligence</h2>

            <div className="flex flex-col md:flex-row gap-8">
              <img
                src="/aibanner.png"
                alt="Artificial Intelligence"
                className="w-full md:w-[60vw] h-auto px-10 rounded-lg"
              />

              <div className="flex-1 flex flex-col justify-center items-start">
                <h2 className="text-xl md:text-3xl text-white">
                  AI for Scientific and Technological Breakthroughs
                </h2>

                <hr className="w-full border-gray-600 my-4" />

                <span className="text-base md:text-lg text-gray-300 mt-2">
                  Accelerating Discovery with Artificial Intelligence
                </span>

                <hr className="w-full border-gray-600 my-4" />

                <p className="text-base md:text-lg text-gray-300">
                  Redefining Possibilities with AI-Driven Research
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 px-4 md:px-12 py-8">
            <h2 className="text-white text-2xl md:text-4xl mb-6">Quantum Computing</h2>

            <div className="flex flex-col md:flex-row gap-8">
              <img
                src="/qcbanner.png"
                alt="Quantum Computing"
                className="w-full md:w-[60vw] px-10 h-auto rounded-lg"
              />

              <div className="flex-1 flex flex-col justify-center items-start">
                <h2 className="text-xl md:text-3xl text-white">
                  Quantum Computing for Solving the Seemingly Impossible
                </h2>

                <hr className="w-full border-gray-600 my-4" />

                <span className="text-base md:text-lg text-gray-300 mt-2">
                  Reimagining What is Possible with Quantum Power
                </span>

                <hr className="w-full border-gray-600 my-4" />

                <p className="text-base md:text-lg text-gray-300">
                  The Next Leap: Unlocking Quantum Solutions for Global Problems
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
