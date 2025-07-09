import { http, HttpResponse } from "msw";

import { Group } from "@/domains/groups";

import { ENDPOINT } from "@/shared";

const BASE_URL = "http://localhost:3000";

export const handlers = [
  http.get(`${BASE_URL}${ENDPOINT.GROUP.LIST}`, async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");
    console.log("ENDPOINT.GROUP.list");

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
