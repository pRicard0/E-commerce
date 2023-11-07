export default function TextArea() {
    return (
        <div className="font-Kumbh p-6">
            <div className="space-y-2">
                <h2 className="text-primary-Orange font-bold text-h2 uppercase tracking-widest">Sneaker company</h2>
                <h1 className="text-h1 font-bold leading-8">Fall Limited Edition Sneakers</h1>
                <p className="text-neutral-Dark-grayish-blue pt-2 tracking-tight">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            </div>

            <div className="flex justify-between items-center my-7">
                <div className="flex items-center space-x-5">
                    <em className="font-bold not-italic text-3xl">$125.50</em>
                    <em className="text-primary-Orange not-italic text-lg font-bold p-1">50%</em>
                </div>
                <s className="text-neutral-Dark-grayish-blue font-bold opacity-60">$250.00</s>
            </div>
        </div>
    )
}