import Sorter from "./Sorter";

export default function Header({sort, onSortChange}) {
    return (
        <header className="flex justify-between items-center py-4 px-6 bg-gray-200 rounded-lg shadow-md sticky top-0 z-10">
            <h1 className="text-2xl font-bold text-gray-800">Product Explorer</h1>
            <div>
                <Sorter value={sort} onChange={onSortChange} />
            </div>
        </header>
    );
}