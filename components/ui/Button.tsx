
type Props={children:React.ReactNode; variant?: "gold"|"blue"};
export default function Button({children,variant="gold"}:Props){
 return <button className={variant==="gold"?"rounded-full bg-[#F5B942] px-6 py-3 font-bold text-black":"rounded-full bg-[#032B44] px-6 py-3 font-bold text-white"}>{children}</button>
}
