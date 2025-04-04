import { BudgetInquiryProps } from "./Budget.types";

export const BudgetInquiry = ({
    newInquiry,
    setNewInquiry,
    handleSubmit
}: BudgetInquiryProps) => {

    return (
        <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row mb-16 sm:mx-4 lg:mx-32 p-10 border-2 border-gray-50 shadow-lg rounded-lg w-full sm:w-auto'>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full">
                <div className="flex flex-col sm:flex-row md:flex-row justify-between w-full mb-4 sm:mb-0 lg:gap-4">
                    <div className='flex flex-col items-start p-4 flex-grow'>
                        <input
                            type="text"
                            placeholder="Nom"
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                            value={newInquiry.name}
                            onChange={(e) => setNewInquiry({ ...newInquiry, name: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col items-start p-4 flex-grow'>
                        <input
                            type='text'
                            placeholder="Telèfon"
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                            value={newInquiry.telephone}
                            onChange={(e) => setNewInquiry({ ...newInquiry, telephone: e.target.value })}
                        />
                    </div>
                    <div className='flex flex-col items-start p-4 flex-grow'>
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                            value={newInquiry.email}
                            onChange={(e) => setNewInquiry({ ...newInquiry, email: e.target.value })}
                        />
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start mt-4">
                    <button className="bg-teal-900 text-white rounded-lg px-8 py-2 sm:px-6 sm:py-2 lg:w-60 lg:h-12 transition-all duration-300 hover:bg-teal-700">
                        Sol·licitar pressupost →
                    </button>
                </div>
            </form>
        </div>
    )
};