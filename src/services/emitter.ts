import { uuid } from "../utils";

type Event = {
  id: string;
  name: string;
  fn: Function;
};

const events = new Map();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  subscribe(event: string, fn: Function) {
    const id = uuid();
    if (!events.has(event)) {
      events.set(event, []);
    }
    events.set(event, [...events.get(event), { id, name: event, fn }]);
    return () => {
      if (!events.has(event)) return;
      events.set(
        event,
        events.get(event).filter((item: Event) => item.id !== id)
      );
    };
  },
  unsubscribe(event: string) {
    if (!events.has(event)) return;
    events.delete(event);
  },
  emit(event: string, data?: any) {
    if (!events.has(event)) return;
    events.get(event).forEach((item: Event) => {
      item.fn(data);
    });
  },
};
