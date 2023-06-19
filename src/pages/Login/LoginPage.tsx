import * as S from '../../style/login/loginpage'

function LoginPage() {
  return (
    <S.Wrapper>
        <S.Container>
            <S.ContainerHeder>
                <img className='MainLogo' src={`${process.env.PUBLIC_URL}/images/logo/TutorLinkSymbolLogo_v2.png`} alt='mainLogo'></img>
            </S.ContainerHeder>
            <S.ContainerMain>
                <S.InputBox placeholder='아이디를 입력해주세요'></S.InputBox>
                <S.InputBox placeholder='비밀번호를 입력해주세요'></S.InputBox>
                <S.SubBar>
                    <div> 로그인 유지 <input type="checkbox" /></div>
                    <div> 비밀번호 찾기</div>
                </S.SubBar>
                <S.LoginButton>로그인</S.LoginButton>
                <div className='SignupGuide' > 혹은, <span>회원가입</span> 하러가요</div>
                <hr/>
            </S.ContainerMain>
            <S.ContainerFooter>
                <S.SocialButton></S.SocialButton>
                <S.SocialButton></S.SocialButton>
                <S.SocialButton></S.SocialButton>
            </S.ContainerFooter>
        </S.Container>
    </S.Wrapper>
  )
}

export default LoginPage