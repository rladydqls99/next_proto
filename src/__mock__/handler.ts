import { http, HttpResponse } from "msw";

import { GroupMemberDto, GroupMemberSchema } from "@/domains/group-members";
import { Group } from "@/domains/groups";

import { ENDPOINT } from "@/shared";

const BASE_URL = "http://localhost:3000";

export const handlers = [
  // group ------------------------------------------------------------------------------------------------
  http.get(`${BASE_URL}${ENDPOINT.GROUP.LIST}`, async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    const filteredData = groupData.filter(item => item.groupName.includes(search || ""));

    return HttpResponse.json({
      success: true,
      data: filteredData,
      error: null,
    });
  }),

  http.post(`${BASE_URL}${ENDPOINT.GROUP.CREATE}`, async ({ request }) => {
    const group = (await request.json()) as Group;

    const newGroup = {
      ...group,
      memberCount: 0,
      id: String(groupData.length + 1),
    };

    groupData.push(newGroup);

    return HttpResponse.json({
      success: true,
      data: newGroup,
      error: null,
    });
  }),

  http.put(`${BASE_URL}/api/group/:groupId`, async ({ request }) => {
    const group = (await request.json()) as Group;

    const updatedGroupIndex = groupData.findIndex(item => item.id === group.id);

    if (updatedGroupIndex !== -1) {
      groupData[updatedGroupIndex] = {
        ...groupData[updatedGroupIndex],
        ...group,
      };
    }

    return HttpResponse.json({
      success: true,
      data: group,
      error: null,
    });
  }),

  http.delete(`${BASE_URL}/api/group/:groupId`, async ({ request }) => {
    const groupId = request.url.split("/").pop();

    const deletedGroupIndex = groupData.findIndex(item => item.id === groupId);

    if (deletedGroupIndex !== -1) {
      groupData.splice(deletedGroupIndex, 1);
    }

    return HttpResponse.json({
      success: true,
      data: [],
      error: null,
    });
  }),

  // group member ------------------------------------------------------------------------------------------------
  http.get(`${BASE_URL}${ENDPOINT.GROUP_MEMBER.LIST}`, async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    console.log("ENDPOINT.GROUP_MEMBER.list");

    const filteredData = groupMemberData.filter(item => item.memberName.includes(search || ""));

    return HttpResponse.json({
      success: true,
      data: filteredData,
      error: null,
    });
  }),

  http.post(`${BASE_URL}${ENDPOINT.GROUP_MEMBER.CREATE}`, async ({ request }) => {
    const groupMember = (await request.json()) as GroupMemberSchema;

    const newGroupMember = {
      ...groupMember,
      id: String(groupMemberData.length + 1),
      groupName: groupData.find(item => item.groupCode === groupMember.groupCode)?.groupName || "",
      loginError: 0,
      createdAt: new Date().toISOString(),
    };

    groupMemberData.push(newGroupMember);

    return HttpResponse.json({
      success: true,
      data: newGroupMember,
      error: null,
    });
  }),
];

const groupData: Group[] = [
  { id: "1", groupCode: "G100", groupName: "전체", description: "전체 그룹", memberCount: 100 },
  {
    id: "2",
    groupCode: "G101",
    groupName: "그룹1",
    description: "그룹1의 설명이 들어갑니다.",
    memberCount: 10,
  },
  {
    id: "3",
    groupCode: "G102",
    groupName: "그룹2",
    description: "그룹2의 설명이 들어갑니다.",
    memberCount: 20,
  },
  {
    id: "4",
    groupCode: "G103",
    groupName: "그룹3",
    description: "그룹3의 설명이 들어갑니다.",
    memberCount: 30,
  },
  {
    id: "5",
    groupCode: "G104",
    groupName: "그룹4",
    description: "그룹4의 설명이 들어갑니다.",
    memberCount: 40,
  },
  {
    id: "6",
    groupCode: "G105",
    groupName: "그룹5",
    description: "그룹5의 설명이 들어갑니다.",
    memberCount: 50,
  },
  {
    id: "7",
    groupCode: "G106",
    groupName: "그룹6",
    description: "그룹6의 설명이 들어갑니다.",
    memberCount: 60,
  },
  {
    id: "8",
    groupCode: "G107",
    groupName: "그룹7",
    description: "그룹7의 설명이 들어갑니다.",
    memberCount: 70,
  },
];

const groupMemberData: GroupMemberDto[] = [
  {
    id: "1",
    memberId: "1",
    memberName: "홍길동",
    groupCode: "G100",
    groupName: "전체",
    telNo: "01011111111",
    useYn: "Y",
    loginError: 0,
    createdAt: "2024-05-01T09:00:00Z",
  },
  {
    id: "2",
    memberId: "2",
    memberName: "김철수",
    groupCode: "G101",
    groupName: "그룹1",
    telNo: "01022223333",
    useYn: "Y",
    loginError: 1,
    createdAt: "2024-05-01T09:00:00Z",
  },
  {
    id: "3",
    memberId: "3",
    memberName: "이영희",
    groupCode: "G102",
    groupName: "그룹2",
    telNo: "01033334444",
    useYn: "N",
    loginError: 0,
    createdAt: "2024-05-02T10:30:00Z",
  },
  {
    id: "4",
    memberId: "4",
    memberName: "박민수",
    groupCode: "G103",
    groupName: "그룹3",
    telNo: "01044445555",
    useYn: "Y",
    loginError: 2,
    createdAt: "2024-05-03T11:15:00Z",
  },
  {
    id: "5",
    memberId: "5",
    memberName: "최지우",
    groupCode: "G104",
    groupName: "그룹4",
    telNo: "01055556666",
    useYn: "Y",
    loginError: 0,
    createdAt: "2024-05-04T12:00:00Z",
  },
  {
    id: "6",
    memberId: "6",
    memberName: "정해인",
    groupCode: "G105",
    groupName: "그룹5",
    telNo: "01066667777",
    useYn: "N",
    loginError: 3,
    createdAt: "2024-05-05T13:45:00Z",
  },
  {
    id: "7",
    memberId: "7",
    memberName: "오수진",
    groupCode: "G106",
    groupName: "그룹6",
    telNo: "01077778888",
    useYn: "Y",
    loginError: 0,
    createdAt: "2024-05-06T14:20:00Z",
  },
  {
    id: "8",
    memberId: "8",
    memberName: "한지민",
    groupCode: "G107",
    groupName: "그룹7",
    telNo: "01088889999",
    useYn: "Y",
    loginError: 1,
    createdAt: "2024-05-07T15:10:00Z",
  },
];
