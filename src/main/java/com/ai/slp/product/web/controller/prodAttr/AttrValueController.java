package com.ai.slp.product.web.controller.prodAttr;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.base.vo.PageInfoResponse;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.slp.common.api.cache.interfaces.ICacheSV;
import com.ai.slp.common.api.cache.param.SysParamSingleCond;
import com.ai.slp.product.api.productcat.interfaces.IAttrAndValDefSV;
import com.ai.slp.product.api.productcat.param.AttrDefInfo;
import com.ai.slp.product.api.productcat.param.AttrDefParam;
import com.ai.slp.product.api.productcat.param.AttrValInfo;
import com.ai.slp.product.api.productcat.param.AttrValPageQuery;
import com.ai.slp.product.web.constants.SysCommonConstants;

/**
 * 属性值管理
 * @author jiawen
 * @time 2016-8-16
 *
 */
@Controller
@RequestMapping("/attrValue")
public class AttrValueController {
	private static Logger LOG = LoggerFactory.getLogger(AttrController.class);
	
	/**
	 * 进入属性值管理页面
	 */
	@RequestMapping("/attrManage")
	public String attrList() {
		return "prodAttr/attrManage";
	}
	/**
	 * 查询属性值列表
	 */
	@RequestMapping("/getAttrList")
	@ResponseBody
	private ResponseData<PageInfoResponse<AttrValInfo>> queryAttrValueList(HttpServletRequest request,AttrValPageQuery pageQuery){
		ResponseData<PageInfoResponse<AttrValInfo>> responseData = null;
		
		try {
			//查询条件
			queryBuilder(request, pageQuery);
			
			PageInfoResponse<AttrValInfo> result = queryAttrByAttrvalId(pageQuery);
			responseData = new ResponseData<PageInfoResponse<AttrValInfo>>(ResponseData.AJAX_STATUS_SUCCESS, "查询成功",
					result);
		} catch (Exception e) {
			responseData = new ResponseData<PageInfoResponse<AttrValInfo>>(ResponseData.AJAX_STATUS_FAILURE,
					"获取信息异常");
			LOG.error("获取信息出错：", e);
		}
		
		
		return responseData;
	}
	
	private void queryBuilder(HttpServletRequest request, AttrValPageQuery pageQuery) {
		//设置租户ID
		pageQuery.setTenantId(SysCommonConstants.COMMON_TENANT_ID);
		//设置属性ID
		String parameter = request.getParameter("AttrId");
		Long attrIdLong = Long.valueOf(parameter).longValue();
		pageQuery.setAttrId(attrIdLong);
		
		if (StringUtils.isNotBlank(request.getParameter("attrvalueDefId"))) {
			pageQuery.setAttrvalueDefId(request.getParameter("attrvalueDefId"));
		}
		if (StringUtils.isNotBlank(request.getParameter("attrValueName"))) 
			pageQuery.setAttrValueName(request.getParameter("attrValueName"));
	}
	
	private PageInfoResponse<AttrValInfo> queryAttrByAttrvalId(AttrValPageQuery pageQuery) {
		IAttrAndValDefSV attrAndValDefSV = DubboConsumerFactory.getService(IAttrAndValDefSV.class);
		PageInfoResponse<AttrValInfo> result = attrAndValDefSV.queryPageAttrvalue(pageQuery);
		
		return result;
	}
	
}