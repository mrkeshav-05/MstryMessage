import create from 'zustand';

const useConversation = create((set) => ({
  messages: [],
  loading: false,
  selectedConversation: null,
  setMessages: (messages) => set({ messages }),
  setLoading: (loading) => set({ loading }),
  setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
  fetchMessages: async (conversationId) => {
    set({ loading: true });
    try {
      const res = await fetch(`/api/messages/${conversationId}`);
      const data = await res.json();
      if (res.ok) {
        set({ messages: data });
      } else {
        throw new Error(data.error || 'Failed to fetch messages');
      }
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useConversation;
