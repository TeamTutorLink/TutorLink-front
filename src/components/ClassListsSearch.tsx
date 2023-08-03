import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClassEach from './ClassEach';
import axios from 'axios';

export type ClassInfo = {
  lessonId: number;
  title: string;
  userName: string;
  likeCount: number;
};

const ClassListsSearch = () => {
  const [classInfo, setClassInfo] = useState<ClassInfo[] | null>(null);
  // const [lessonId, setLessonId] = useState();
  // const [title, setTitle] = useState();
  // const [userName, setUserName] = useState();
  // const [likeCount, setLikeCount] = useState();

  useEffect(() => {
    const asynData = async () => {
      await axios
        .get(
          'http://15.164.165.34:8080/lessons/search/login?type=0&keyword=%EC%A0%9C&page=1',
        )
        .then((response) => {
          console.log(response.data);
          setClassInfo(response.data);
          // setLessonId(response.data.lessonId);
          // setTitle(response.data.title);
          // setUserName(response.data.userName);
          // setLikeCount(response.data.likeCount);
        })
        .catch((error) => {
          console.log(error);
          console.log('Error: ', error.response.data.responseMessage);
          alert('Error: ' + error.response.data.responseMessage);
        });
    };
    asynData().catch(console.error);
  }, []);

  return (
    <StyledContainer>
      <StyledTitleDiv>검색 결과</StyledTitleDiv>
      <StyledSubDiv>00개의 강의를 찾았어요!</StyledSubDiv>
      <hr />
      <StyledClassLists>
        {classInfo
          ? classInfo.map((classInfo) => {
              return (
                <ClassEach
                  lessonId={classInfo.lessonId}
                  title={classInfo.title}
                  userName={classInfo.userName}
                  likeCount={classInfo.likeCount}
                />
              );
            })
          : null}
      </StyledClassLists>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  margin: 0 0 80px;
`;
const StyledClassLists = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const StyledTitleDiv = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin: 30px 0 10px;
`;
const StyledSubDiv = styled.div`
  font-size: 14px;
  margin: 8px 0 10px;
  color: gray;
`;
export default ClassListsSearch;

// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
