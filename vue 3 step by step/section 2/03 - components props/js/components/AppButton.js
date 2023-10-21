export default {
    
    template: `
        <button 
            :class="{'px-5 py-2 rounded  hover:bg-blue-600 disabled:cursor-not-allowed':true, 
                'bg-blue-600': button_state === 'primary', 
                'bg-red-400': button_state === 'warning', 
                'bg-green-400': button_state === 'success',
                'spinner': processing
            }" 
            :disabled="processing">
            <slot/>
        </button>
    `,

    props: {
        button_state: {
            type: String, 
        }
    },

    
    data() {
        return {
            processing: true,
        }
    }


}
