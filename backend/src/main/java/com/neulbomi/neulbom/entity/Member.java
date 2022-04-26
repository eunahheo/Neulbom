package com.neulbomi.neulbom.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "member")
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 파라미터가 없는 기본 생성자를 생성한다. 접근 권한을 설정하여 어느 곳에서나 객체를 생성할 수 있는 상황을 막는다.
@Getter
@Setter
@ToString
@AllArgsConstructor
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // PK, Auto_Increment로 설정해서 직접 할당 방식이 아니라, 자동으로 생성되도록 하기 위한
														// 어노테이션
	@Column(name = "member_seq")
	private int memberSeq;

	@Column(name = "user_seq")
	private int userSeq;

	@Column(name = "member_nickname")
	private String memberNickname;

	@Column(name = "member_img")
	private String memberImg;

	@Column(name = "member_height")
	private int memberHeight;

	@Column(name = "member_weight")
	private int memberWeight;

	@Column(name = "member_year")
	private int memberYear;

	@Column(name = "member_gender")
	private String memberGender;

	@Column(name = "member_desc")
	private String memberDesc;

	@Column(name = "member_kcal")
	private int memberKcal;

	@Column(name = "del_yn")
	private String delYn;

	@Column(name = "reg_email")
	private String regEmail;

	@Column(name = "reg_dt")
	private String regDt;

	@Column(name = "mod_email")
	private String modEmail;

	@Column(name = "mod_dt")
	private String modDt;
}