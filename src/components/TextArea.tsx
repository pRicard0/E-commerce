export default function TextArea() {
    return (
            <div>
                <div className="space-y-2 lg:space-y-6 pt-2">
                    <h2 className="text-primary-Orange font-bold text-h2 uppercase tracking-widest">Sneaker company</h2>
                    <h1 className="text-h1 font-bold leading-8 lg:text-h1Desktop lg:leading-h1Leading lg:pb-2">Fall Limited Edition Sneakers</h1>
                    <p className="text-neutral-Dark-grayish-blue pt-2 tracking-tight">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                </div>
                <div className="flex justify-between items-center my-7 lg:flex-col lg:items-start">
                    <div className="flex items-center space-x-5">
                        <em className="font-bold not-italic text-3xl lg:text-priceDesktop">$125.00</em>
                        <div className="bg-primary-Pale-orange rounded-md h-7 px-2 flex items-center">
                            <em className="text-primary-Orange not-italic text-lg font-bold">50%</em>
                        </div>
                    </div>
                    <s className="text-neutral-Dark-grayish-blue font-bold opacity-60 tracking-wide lg:pt-1">$250.00</s>
                </div>
            </div>
    )
}