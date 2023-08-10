import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClassEach from './ClassEach';
import API from '../API/API';

export type ClassInfo = {
  lessonId: number;
  title: string;
  userName: string;
  likeLesson?: boolean;
  likeCount: number;
};

const ClassListsMain = () => {
  const [classInfo, setClassInfo] = useState<ClassInfo[] | null>(null);
  // const [lessonId, setLessonId] = useState();
  // const [title, setTitle] = useState();
  // const [userName, setUserName] = useState();
  // const [likeCount, setLikeCount] = useState();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const asynData = async () => {
      if (accessToken) {
        const response = await API.getLoginLessons();
        console.log(response.data);
        setClassInfo(response.data);
      } else {
        const response = await API.getLessons();
        console.log(response.data);
        setClassInfo(response.data);
      }
      // setLessonId(response.data.lessonId);
      // setTitle(response.data.title);
      // setUserName(response.data.userName);
      // setLikeCount(response.data.likeCount);
    };
    asynData().catch(console.error);
  }, []);

  return (
    <StyledContainer>
      <StyledClassLists>
        {classInfo
          ? classInfo.map((classInfo) => {
              return (
                <ClassEach
                  lessonId={classInfo.lessonId}
                  title={classInfo.title}
                  userName={classInfo.userName}
                  likeLesson={classInfo.likeLesson}
                  likeCount={classInfo.likeCount}
                />
              );
            })
          : null}
      </StyledClassLists>{' '}
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

export default ClassListsMain;
