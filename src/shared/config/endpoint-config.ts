export const ENDPOINT = {
  GROUP: {
    LIST: `/api/groups`,
    CREATE: `/api/group`,
    UPDATE: (groupId: string) => `/api/group/${groupId}`,
    DELETE: (groupId: string) => `/api/group/${groupId}`,
  },

  GROUP_MEMBER: {
    LIST: `/api/group-members`,
    CREATE: `/api/group-member`,
    UPDATE: (groupMemberId: string) => `/api/group-member/${groupMemberId}`,
    DELETE: (groupMemberId: string) => `/api/group-member/${groupMemberId}`,
  },
};
