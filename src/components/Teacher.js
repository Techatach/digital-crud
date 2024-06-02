import React from "react";

export default function Teacher() {
  return (
    <div className="shadow-lg p-16 mb-5 bg-body rounded">
      <div class="flex items-center justify-center text-center">
        <div class="flex flex-col p-2 m-2 ">
          <div class="text-3xl font-medium">อาจารย์ผู้รับผิดชอบหลักสูตร</div>
          <div class="text-sm mx-2 md:text-xl text-stone-500 mb-14">
            หลักสูตรรัฐประศาสนศาสตร์ มีอาจารย์ผู้รับผิดชอบหลักสูตรทั้งหมด 6 ท่าน
            ดังนี้
          </div>
          {/* <div class="text-sm mx-2 md:text-xl mb-2 text-stone-500">
            Resource person of Tailblocks communinty
          </div> */}
          <div class="md:grid flex">
            <div class="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
              <div class="flex-col px-6 py-2  max-w-7xl flex items-center justify-center">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    // src="https://source.unsplash.com/300x300/?man,businessman"
                    src="images/te.jpg"
                    alt=""
                    class=""
                  />
                </div>
                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div class=" italic text-gray-500">
                  การเปลี่ยนแปลงและการพัฒนาองค์การภาครัฐ
                </div>
                <div class=" italic text-gray-500">
                  การวิเคราะห์ข้อมูลขนาดใหญ่ สำหรับรัฐประศาสนศาสตร์
                </div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img src="images/te.jpg" alt="" class="" />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  อ.ดร.เตชทัช คลายโศกก์
                </div>
                <div class=" italic text-gray-500">
                  อาจารย์ผู้รับผิดชอบหลักสูตร
                </div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Elina Gilbert
                </div>
                <div class=" italic text-gray-500">HR</div>
              </div>
            </div>
            <div class="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?kid"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Clay Johnson
                </div>
                <div class=" italic text-gray-500">Manager</div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Hannah Saw
                </div>
                <div class=" italic text-gray-500">Marketing Producer</div>
              </div>
              <div class="flex-col px-6 py-2 ">
                <div class="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://source.unsplash.com/300x300/?woman"
                    alt=""
                    class=""
                  />
                </div>

                <div class="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Wednesday Addams
                </div>
                <div class=" italic text-gray-500">Financer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
}
