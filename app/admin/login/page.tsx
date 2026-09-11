
export default function LoginPage(){
 return (
  <main className="min-h-screen flex items-center justify-center p-6">
   <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">
    <h1 className="text-3xl font-black mb-6">ورود مدیر</h1>
    <input className="border p-3 rounded-xl w-full mb-3" placeholder="نام کاربری"/>
    <input className="border p-3 rounded-xl w-full mb-5" placeholder="رمز عبور"/>
    <button className="bg-[#032B44] text-white rounded-xl p-3 w-full">
     ورود
    </button>
   </div>
  </main>
 )
}
