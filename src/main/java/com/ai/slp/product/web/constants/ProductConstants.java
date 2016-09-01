package com.ai.slp.product.web.constants;

/**
 * 商品类目
 *
 * Created by jackieliu on 16/5/1.
 */
public final class ProductConstants {

    public final class NormProduct{
        public final class State{
            /**
             * 失效
             */
            public static final String INACTIVE = "0";

            /**
             * 可使用
             */
            public static final String ENABLE = "1";
            
            /**
             * 不可使用
             */
            public static final String DISABLE = "2";
        }
    }
}
