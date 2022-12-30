class password {
    constructor() {
        this.password = password;
    }

    generate_strong_password() {
        let sp = "";
        function add_caps() {
            let add_car;
            let caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            let len = Math.floor(Math.random() * caps.length);
            for (let i = 0; i <= len; i++) {
                add_car = caps[i];
            }
            sp = sp + add_car;
            return sp;
        }

        function add_small(){
            let add_sm1;
            let add_sm2;
            let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let len = Math.floor(Math.random() * small.length);
            for (let i = 0; i <= len; i++) {
                add_sm1 = small[i];
                if(len <= 3){
                    add_sm2 = small[i+3];
                }
                else{
                    add_sm2 = small[i];
                }
                
            }
            sp = sp + add_sm1 + add_sm2;
            return sp;
        }

        function add_num(){
            let add_num1;
            let add_num2;
            let add_num3;
            let num = ['1','2','3','4','5','6','7','8','9','0'];
            let len = Math.floor(Math.random() * num.length);
            for (let i = 0; i <= len; i++) {
                
                add_num1 = num[i];
                if(len <= 3){
                    add_num2 = num[i+2];
                }
                else{
                    add_num2 = num[i-2]
                }

                if(len <= 4){
                    add_num3 = num[i+1];
                }
                else{
                    add_num3 = num[i-1];
                }
                
            }
            sp = sp + add_num1 + add_num2 + add_num3;
            return sp;

        }
        function func(){
            let rand = Math.floor(Math.random() * 7);
            switch(rand){
                case 0:
                    add_caps();
                    add_small();
                    add_num();
                    break;

                case 1:
                    add_caps();
                    add_num();
                    add_small();
                    break;

                case 2:
                    add_num();
                    add_caps();
                    add_small();
                    break;

                case 3:
                    add_num();
                    add_caps();
                    add_small();
                    break;

                case 4:
                    add_num();
                    add_small();
                    add_caps();
                    break;

                case 5:
                    add_small();
                    add_num();
                    add_caps();
                    break;

                case 6:
                    add_small();
                    add_caps();
                    add_num();
                    break;
            }
            return sp;
        }
        func();
        return sp;
    }

    generate_week_password() {
        let wp = ""
            function add_small(){
                let add_sm1;
                let add_sm2;
                let add_sm3;
                let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                let len = Math.floor(Math.random() * small.length);
                for (let i = 0; i <= len; i++) {
                    add_sm1 = small[i];
                    if(len <= 3){
                        add_sm2 = small[i+3];
                    }
                    else{
                        add_sm2 = small[i];
                    }

                    if(len <= 2){
                        add_sm3 = small[i+2];
                    }
                    else{
                        add_sm3 = small[i-1];
                    }
                    
                }
                wp = wp + add_sm1 + add_sm2 + add_sm3;
                return wp;
        }

        function add_num(){
            let add_num1;
            let add_num2;
            let add_num3;
            let num = ['1','2','3','4','5','6','7','8','9','0'];
            let len = Math.floor(Math.random() * num.length);
            for (let i = 0; i <= len; i++) {
                
                add_num1 = num[i];
                if(len <= 3){
                    add_num2 = num[i+2];
                }
                else{
                    add_num2 = num[i-2]
                }

                if(len <= 4){
                    add_num3 = num[i+1];
                }
                else{
                    add_num3 = num[i-1];
                }
                
            }
            wp = wp + add_num1 + add_num2 + add_num3;
            return wp;

        }

        function func(){
            let rand = Math.floor(Math.random() * 2);
            switch(rand){
                case 0:
                    add_small();
                    add_num();
                    break;

                case 1:
                    add_num();
                    add_small();
                    break;
            }
        return wp;
        }
        func();
        return wp;
    }

    generate_super_strong_password() {
        let ssp = "";
        function add_caps() {
            let add_car;
            let add_caps2
            let caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            let len = Math.floor(Math.random() * caps.length);
            for (let i = 0; i <= len; i++) {
                add_car = caps[i];
                if(len < 3){
                    add_caps2 = caps[i+2]
                }
                else{
                    add_caps2 = caps[i-1]
                }
            }
            ssp = ssp + add_car + add_caps2;
            return ssp;
        }

        function add_num(){
            let add_num1;
            let add_num2;
            let num = ['1','2','3','4','5','6','7','8','9','0'];
            let len = Math.floor(Math.random() * num.length);
            for (let i = 0; i <= len; i++) {
                
                add_num1 = num[i];
                if(len <= 3){
                    add_num2 = num[i+2];
                }
                else{
                    add_num2 = num[i-2]
                }
                
            }
            ssp = ssp + add_num1 + add_num2;
            return ssp;
        }

        function add_small(){
            let add_sm1;
            let add_sm2;
            let small = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let len = Math.floor(Math.random() * small.length);
            for (let i = 0; i <= len; i++) {
                add_sm1 = small[i];
                if(len <= 3){
                    add_sm2 = small[i+3];
                }
                else{
                    add_sm2 = small[i];
                }
                
            }
            ssp = ssp + add_sm1 + add_sm2;
            return ssp;
        }

        function add_spl(){
            let spl_c1;
            let spl_c2;
            let spl = ["+","]","[","-","*","||",")","&","^","$","@","?"]
            let len = Math.floor(Math.random() * spl.length);
            for(let i=0;i<len;i++){
                spl_c1 = spl[i];
                if(len <= 5){
                    spl_c2 = spl[i+1];
                }
                else{
                    spl_c2 = spl[i-2];
                }
            }
            ssp = ssp + spl_c1 + spl_c2;
            return ssp;
        }
        

        function func(){
            let rand = Math.floor(Math.random() * 7);
            switch(rand){
                case 0:
                    add_caps();
                    add_small();
                    add_num();
                    add_spl();
                    break;
    
                case 1:
                    add_caps();
                    add_spl();
                    add_num();
                    add_small();
                    break;
    
                case 2:
                    add_num();
                    add_spl();
                    add_caps();
                    add_small();
                    break;
    
                case 3:
                    add_num();
                    add_caps();
                    add_spl()
                    add_small();
                    break;
    
                case 4:
                    add_num();
                    add_small();
                    add_caps();
                    add_spl();
                    break;
    
                case 5:
                    add_spl();
                    add_small();
                    add_num();
                    add_caps();
                    break;
    
                case 6:
                    add_small();
                    add_caps();
                    add_spl();
                    add_num();
                    break;
            }
            return ssp;
        }
        func();
        return ssp;
    }

    generate_funny_password() {
        let fp = "";
        let funny;
        let arr = ["Admin","admin","Password","password","Delete","delete","Window","window"];
        let rand = Math.floor(Math.random() * arr.length);
        for(let i=0;i<=rand;i++){
            funny = arr[i];
        }
        fp = fp + funny;
        return fp;
    }
}

function st(){
    let strong_pass = new password();
    document.getElementById("out").innerHTML = `<p>${strong_pass.generate_strong_password()}</p>`;
}

function wk(){
    let week_pass = new password();
    document.getElementById("out").innerHTML = `<p>${week_pass.generate_week_password()}</p>`;
}

function fp(){
    let funny_pass = new password();
    document.getElementById("out").innerHTML = `<p>${funny_pass.generate_funny_password()}</p>`;
}

function ssp(){
    let ssp = new password();
    document.getElementById("out").innerHTML = `<p>${ssp.generate_super_strong_password()}</p>`;
}