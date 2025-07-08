import { http, HttpResponse } from "msw";

import { ENDPOINT } from "@/shared";

const BASE_URL = "http://localhost:3000";

export const handlers = [
  http.get(`${BASE_URL}${ENDPOINT.GROUP.list}`, async ({ request }) => {
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
];

const groupData = [
  { groupCode: "G100", groupName: "전체", description: "전체 그룹", memberCount: 100 },
  {
    groupCode: "G101",
    groupName: "그룹1",
    description: "그룹1의 설명이 들어갑니다.",
    memberCount: 10,
  },
  {
    groupCode: "G102",
    groupName: "그룹2",
    description: "그룹2의 설명이 들어갑니다.",
    memberCount: 20,
  },
  {
    groupCode: "G103",
    groupName: "그룹3",
    description: "그룹3의 설명이 들어갑니다.",
    memberCount: 30,
  },
  {
    groupCode: "G104",
    groupName: "그룹4",
    description: "그룹4의 설명이 들어갑니다.",
    memberCount: 40,
  },
  {
    groupCode: "G105",
    groupName: "그룹5",
    description: "그룹5의 설명이 들어갑니다.",
    memberCount: 50,
  },
  {
    groupCode: "G106",
    groupName: "그룹6",
    description: "그룹6의 설명이 들어갑니다.",
    memberCount: 60,
  },
  {
    groupCode: "G107",
    groupName: "그룹7",
    description: "그룹7의 설명이 들어갑니다.",
    memberCount: 70,
  },
];
