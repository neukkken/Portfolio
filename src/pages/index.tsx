import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="px-5 py-10 grid grid-cols-3 gap-4">
        <div className="border-2 rounded-xl flex px-8 py-10 items-center gap-4 shadow-custom-button col-span-2">
          <div className="w-22 h-22 bg-gray-700 border-2 rounded-full shadow-custom-button" />
          <div>
            <div>
              <div className="flex items-center gap-4">
                <h1 className="font-bold text-4xl">Santiago Narvaez</h1>
                <div className="bg-gray-100 px-4 rounded-xl font-bold shadow-custom-button border-2 border-black">Frontend</div>
              </div>
              <p className="underline font-black text-xl mt-2">santyagonarvaezns@gmail.com</p>
              <p className="text-xl font-bold text-gray-500">Desarrollo interfaces y soluciones con un enfoque claro: accesibilidad, rendimiento y estética.</p>
            </div>
            <div className="mt-4">
              <div className="gap-4 flex">
                <button>
                  Github
                </button>
                <button>
                  LinkedIn
                </button>
                <button>
                  Email
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </DefaultLayout>
  );
}