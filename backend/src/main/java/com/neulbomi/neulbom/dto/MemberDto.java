package com.neulbomi.neulbom.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@ApiModel(value="회원 가입 DTO")
public class MemberDto {
	@ApiModelProperty(example="0", value="0: 일반회원, 1: 전문가")
	private String userType;
	
	@ApiModelProperty(example="test@test.com",value="유저 이메일")
	private String userEmail;
	
	@ApiModelProperty(example="test",value="유저 패스워드")
	private String userPwd;
	
	@ApiModelProperty(example="테스트",value="랜덤으로 생성된 유저 닉네임")
	private String memberNickname;
	
	@ApiModelProperty(example="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f331.svg",value="프로필 사진 링크")
	private String memberImg;
	
	@ApiModelProperty(example="170", value="키(cm)")
	private int memberHeight;
	
	@ApiModelProperty(example="55", value="몸무게(kg)")
	private int memberWeight;
	
	@ApiModelProperty(example="1990", value="출생년도")
	private int memberYear;
	
	@ApiModelProperty(example="f", value="m: 남성, f: 여성")
	private String memberGender;
	
	@ApiModelProperty(example="고혈압,당뇨", value="질병")
	private String memberDesc;
	
	@ApiModelProperty(value="bloodPressure: 혈압, bloodSugar: 혈당")
	private String[] setting;
}
