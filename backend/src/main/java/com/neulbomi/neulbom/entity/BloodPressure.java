package com.neulbomi.neulbom.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 파라미터가 없는 기본 생성자를 생성한다. 접근 권한을 설정하여 어느 곳에서나 객체를 생성할 수 있는 상황을 막는다.
@Getter
@Setter
@ToString
@AllArgsConstructor
public class BloodPressure {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // PK, Auto_Increment로 설정해서 직접 할당 방식이 아니라, 자동으로 생성되도록 하기 위한 어노테이션
	@Column(name = "bp_seq")
	private long bpSeq;

	@Column(name = "user_seq")
	private int userSeq;

	@Column(name = "bp_code")
	private String bpCode;

	@Column(name = "bp_high")
	private int bpHigh;

	@Column(name = "bp_low")
	private int bpLow;

	@Column(name = "bp_date")
	private String bpDate;

	@Column(name = "bp_time")
	private String bpTime;

	@Column(name = "del_yn")
	private String delYn ="n";

	@Column(name = "reg_email")
	private String regEmail;

	@Column(name = "reg_dt")
	private String regDt;

	@Column(name = "mod_email")
	private String modEmail;

	@Column(name = "mod_dt")
	private String modDt;
	
	@Builder
	public BloodPressure(int userSeq, String bpCode, int bpHigh, int bpLow , String bpDate, String bpTime, String regEmail, String regDt, String modEmail, String modDt) {
		this.userSeq = userSeq;
		this.bpCode = bpCode;
		this.bpHigh = bpHigh;
		this.bpLow = bpLow;
		this.bpDate = bpDate;
		this.bpTime = bpTime;
		this.regEmail = regEmail;
		this.regDt = regDt;
		this.modEmail = modEmail;
		this.modDt = modDt;
	}

}
