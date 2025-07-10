// DTO ---------------------------------------------------------------------
export interface CommonCodeGroupDTO {
  id: string;
  groupKey: string;
  groupName: string;
}

export interface CommonCodeDTO {
  id: string;
  codeKey: string;
  codeName: string;
  groupKey: string;
  groupName: string;
}

// Client Model ---------------------------------------------------------------------
export interface CommonCodeGroup {
  id: string;
  groupKey: string;
  groupName: string;
}

export interface CommonCode {
  id: string;
  codeKey: string;
  codeName: string;
  groupKey: string;
  groupName: string;
}

// transform ---------------------------------------------------------------------
export const toCommonCodeGroup = (dto: CommonCodeGroupDTO): CommonCodeGroup => {
  return {
    id: dto.id,
    groupKey: dto.groupKey,
    groupName: dto.groupName,
  };
};

export const toCommonCode = (dto: CommonCodeDTO): CommonCode => {
  return {
    id: dto.id,
    codeKey: dto.codeKey,
    codeName: dto.codeName,
    groupKey: dto.groupKey,
    groupName: dto.groupName,
  };
};
