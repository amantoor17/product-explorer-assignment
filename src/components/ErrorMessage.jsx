export default function ErrorMessage({message, onRetry}) {
    return (
        <div className="p-6 bg-red-500 rounded-md text-red-700">
            <p className="mb-3">{message}</p>
            {
                onRetry && <button
                onclick={onRetry} className="px-3 py-1 bg-red-600 text-white rounded"
                >
                    Retry
                </button>
            }
        </div>
    );
}