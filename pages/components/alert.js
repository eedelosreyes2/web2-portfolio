export default function Alert() {
    return (
        <div class="flex items-center p-4 mb-4 text-sm rounded-lg bg-gray-800 text-blue-400 mt-12" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-bold">I'm looking for Frontend Engineering opportunities!</span> Be sure to check out my <a href="/Elijah Delos Reyes - Frontend Engineer.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a> or <a href="mailto:delosreyes.elijah@gmail.com" target="_blank" rel="noopener noreferrer" className="underline">email me</a>.
            </div>
        </div>
    )
}