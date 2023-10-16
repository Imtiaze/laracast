export default {
    template: `
        <button 
        class="bg-gray-200 hover:bg-gray-600 border rounded px-5 py-2 disabled:cursor-not-allowed" 
        
        :disabled="processing" 
        @click="clickMe">
            <slot />    
        </button>
    `,

    data() {
        return {
            processing: false
        };
    },
    methods: {
        clickMe() 
        {
            this.processing = true
        }
    }
}