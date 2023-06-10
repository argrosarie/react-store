import { XMarkIcon } from "@heroicons/react/24/solid";

function ProductDetail() {
  return (
    <aside className="flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] top-16">
      <div className="flex items-center justify-between p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon className="w-6 h-6 text-black" />
        </div>
      </div>
    </aside>
  );
}

export default ProductDetail;
