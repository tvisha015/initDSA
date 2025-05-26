import { pollBatchResults, submitBatch } from "../libs/judge0.lib.js";

export const executeCode = async(req,res)=>{
    try {
        const {source_code, language_id, stdin, expected_outputs, problemId} = req.body;
        console.log("1");

        const userId = req.user.id;
        console.log("2");
        
        //validate the test cases
        if(
            !Array.isArray(stdin) ||
            stdin.length === 0 ||
            !Array.isArray(expected_outputs) ||
            expected_outputs.length !== stdin.length
        ){
            return res.status(400).json({
                error:"Invalid or missing test cases"
            })
        }
        console.log("3");
        
        // step2 : Prepare each testcases for judge0 batch submission
        const submissions = stdin.map((input)=>({
            source_code,
            language_id,
            stdin:input,
        }));
        console.log("4");
        
        // step3 : Send batch of submissions to judge0
        const submitResponse = await submitBatch(submissions);

        const tokens = submitResponse.map((res)=>res.token)
        console.log("5");
        
        // step4 : Poll judge0 for results of all submitted test cases
        const results = await pollBatchResults(tokens);

        console.log("---Result:---");
        console.log(results);
        
        res.status(200).json({
            message:"Code Executed!"
        })
        console.log("6");
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error executing code"
        })
    }
}