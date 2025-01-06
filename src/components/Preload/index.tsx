"use client"

interface PreloadProps {
    loading: boolean;
    children: React.ReactNode;
}

const Preload = ({ loading, children }: PreloadProps) => {
    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center bg-gradient-to-b to-gray-200">
                <div className="relative w-10 h-10 border-4 border-t-4 border-t-blue-500 border-blue-300 rounded-full animate-spin"></div>
                <span className="mt-4 text-lg font-semibold text-gray-600">Carregando...</span>
            </div>

        );
    }

    return <>{children}</>;
};

export default Preload;
