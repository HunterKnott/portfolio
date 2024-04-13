import Head from "../Head"

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100">
            <Head options={["App", "Work", "Projects", "Contact"]}/>
            <div className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 py-36 w-full h-screen">

            </div>
        </main>
    )
}