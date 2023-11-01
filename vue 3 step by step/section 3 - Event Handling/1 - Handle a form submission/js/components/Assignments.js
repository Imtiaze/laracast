import AssignmentList from "./AssignmentList.js";

export default {

    components: {AssignmentList},

    template: `

        <section class="space-y-5">
            <assignment-list :assignments="filter.inProgress" title="In Progress Task"></assignment-list>

            <assignment-list :assignments="filter.completed" title="Completed Task"></assignment-list>
        </section>
    `,
    
    data() {
        return {
            tasks: [
                {
                    id: 1, title: 'Wake Up at 8 am', complete: false
                },
                {
                    id: 2, title: 'Brush teeth at 840', complete: false
                },
                {
                    id: 3, title: 'BreakFast at 9 am', complete: false
                },
            ]
        }
    },

    computed: {
        filter() {
            return {
                inProgress: this.tasks.filter(task => !task.complete),
                completed: this.tasks.filter(function(task) {
                    return task.complete
                }),
            };
        }
    }
}