export default {
    template: `
        <button 
        :class="{
            'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-gray-200 hover:bg-gray-600': imti === 'primary',
            'bg-purple-200 hover:bg-gray-600': imti === 'secondary',
            'bg-green-200 hover:bg-gray-600': imti === 'success',
        }" 
        
        :disabled="processing"
        >
            <slot />    
        </button>
    `,

    props: {
        imti: {
            type: String,
            default: 'secondary'
        }
    },
    data() {
        return {
            processing: true
        };
    },
}