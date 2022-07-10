import $ from 'jquery'

const ModuleEvent = {
    state: {
        events: null,
        events_food: [],
        events_view: [],
        events_video: [],
    },
    getters: {
    },
    mutations: {
        updateEvents(state, events) {
            state.events = events.events;
            state.events_food = [];
            state.events_view = [];
            state.events_video = [];
            for (let i = 0; i < state.events.length; ++ i)
            {
                let event = state.events[i];
                let tmp = event.fields;
                tmp["id"] = event.pk;

                if (event.fields.category == '美食') state.events_food.push(tmp);
                else if (event.fields.category == '景点') state.events_view.push(tmp);
                else if (event.fields.category == '影视') state.events_video.push(tmp);
            }
        },
    },
    actions: {
        postEvent(context, data) {
            // 确认access有效
            context.commit("confirm_access_valid");
            let access = localStorage.getItem("access");
            
            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/event/event-view/",
                type: "POST",
                data: {
                    category: data.category,
                    label: data.label,
                    content: data.content,
                    is_finished: data.is_finished,
                },
                headers: {
                    'Authorization': "Bearer " + access,
                },
                success(resp) {
                    if (resp.result == 'success') data.success();
                    else data.error();
                },
                error() {
                    data.error();
                }
            });
        },

        getEvent(context) {
            // 确认access有效
            context.commit("confirm_access_valid");
            let access = localStorage.getItem("access");

            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/event/event-view/",
                type: "GET",
                headers: {
                    'Authorization': "Bearer " + access,
                },
                success(resp) {
                    if (resp.result == "success") {
                        context.commit("updateEvents", {
                            events: JSON.parse(resp.events),
                        });
                    }
                },
                error() {
                }
            });
        },

        getEventById(context, data) {
            // 确认access有效
            context.commit("confirm_access_valid");
            let access = localStorage.getItem("access");

            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/event/event-edit/",
                type: "GET",
                data: {
                    pk: data.eventid,
                },
                headers: {
                    'Authorization': "Bearer " + access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        data.success(resp.event);
                    }
                    else data.error();
                },
                error() {
                    data.error();
                }
            });
        },

        postEventById(context, data) {
            // 确认access有效
            context.commit("confirm_access_valid");
            let access = localStorage.getItem("access");

            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/event/event-edit/",
                type: "POST",
                data: {
                    pk: data.eventid,
                    content: data.content,
                    label: data.label,
                    info: data.info,
                },
                headers: {
                    'Authorization': "Bearer " + access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        data.success(resp.event);
                    }
                    else data.error();
                },
                error() {
                    data.error();
                }
            });
        },

        deleteEvent(context, data) {
            // 确认access有效
            context.commit("confirm_access_valid");
            let access = localStorage.getItem("access");

            $.ajax({
                url: "http://101.35.183.71:5288/johnson_iris/event/event-edit/",
                type: "DELETE",
                data: {
                    pk: data.id,
                },
                headers: {
                    'Authorization': "Bearer " + access,
                },
                success(resp) {
                    if (resp.result === "success") data.success();
                    else data.error();
                },
                error() {
                    data.error();
                }
            });
        }
    },
}

export default ModuleEvent;