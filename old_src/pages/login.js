function Login(){
    return(
      <div className="log_inner">
        <h1>LOGIN</h1>
        <div class="log_top">
          <div class="log_con">
            <div class="log_id">
              <label for="id">ID</label>
              <input type="text" id="id"/>
            </div>
            <div class="log_pw">
              <label for="pw">PW</label>
              <input type="password" id="pw"/>
            </div>
          </div>
          <button className="log_btn">LOGIN</button>
        </div>
        <div class="log_low">
          <p>아이디 찾기</p>
          <p>비밀번호 찾기</p>
          <div class="check">
            <input type="checkbox" id="check"/>
            <label for="check">아이디 저장</label>
          </div>
        </div>
      </div>
    )
}

export default Login