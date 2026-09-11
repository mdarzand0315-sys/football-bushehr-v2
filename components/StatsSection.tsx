
export default function StatsSection() {
  const stats = [
    {number:"48", title:"باشگاه فعال"},
    {number:"12500", title:"بازیکن ثبت شده"},
    {number:"8", title:"لیگ و مسابقات"},
    {number:"320", title:"مربی رسمی"}
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-5 p-6">
      {stats.map((item,index)=>(
        <div key={index} className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h3 className="text-4xl font-black text-[#032B44]">{item.number}</h3>
          <p className="mt-3 text-gray-600">{item.title}</p>
        </div>
      ))}
    </section>
  );
}
