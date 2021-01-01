type Event = {
  id: number;
  fn: Function;
};

type Events = {
  [key: string]: Event[];
};

const events: Events = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Call fn when event is fired
  subscribe(event: string, fn: Function) {
    if (!events.hasOwnProperty(event)) {
      events[event] = [];
    }
    const id = (events[event][events[event].length - 1]?.id ?? 0) + 1;
    events[event].push({ id, fn });
    return () => {
      if (!events.hasOwnProperty(event)) return;
      const index = events[event].findIndex((item) => item.id === id);
      if (index > -1) {
        events[event].splice(index, 1);
      }
    };
  },
  // Unsubscribe from all events
  unsubscribe(event: string) {
    if (events.hasOwnProperty(event)) {
      delete events[event];
    }
  },
  emit(event: string, data?: object | string | number | null) {
    if (!events.hasOwnProperty(event)) return;
    events[event].forEach((item) => item.fn(data));
  },
};
