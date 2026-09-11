interface VideoCardProps {
  title: string;
}

export default function VideoCard({ title }: VideoCardProps) {
  return (
    <div className="rounded-3xl bg-white shadow p-5">
      <div className="h-40 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center">
        ▶
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <button className="mt-4 px-4 py-2 rounded-xl bg-[#032B44] text-white">
        مشاهده ویدیو
      </button>
    </div>
  );
}
