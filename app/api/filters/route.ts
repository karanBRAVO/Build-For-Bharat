import { generateAiResponse } from "@/app/lib/utils/generateAiResponse";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const product = req.nextUrl.searchParams.get('product');
        const prompt =
            `I have a product ${product} which a user wants to buy online, generate all possible filters that a user can put on the product to get his desiered product
            Give response in form of an array of objects so that i can populate the filters on my frontend
            `;
        const filter = await generateAiResponse(prompt);
        return NextResponse.json({
            success: true,
            message: 'data fetched',
            data: filter
        });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}
