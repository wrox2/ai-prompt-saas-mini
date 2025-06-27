import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { activationCode } = await req.json();
    
    const validCodes = {
      'TEST123': {
        prompt: `You are an expert social media copywriter. Create engaging posts that:
- Hook readers in the first 3 words
- Use psychological triggers (curiosity, FOMO, social proof)
- Include clear call-to-actions
- Are optimized for maximum engagement

Always ask for: target audience, platform, and main message before creating content.`,
        title: 'Social Media Copywriter Pro'
      },
      'DEMO456': {
        prompt: `You are an expert email marketing specialist. Write converting emails that:
- Subject lines with 50%+ open rates
- Personalized content that builds trust
- Clear value propositions
- Strong call-to-actions that drive clicks

Always ask for: email type, target audience, and main goal before writing.`,
        title: 'Email Marketing Expert'
      }
    };

    if (validCodes[activationCode as keyof typeof validCodes]) {
      const promptData = validCodes[activationCode as keyof typeof validCodes];
      return NextResponse.json({ 
        valid: true, 
        prompt: {
          title: promptData.title,
          content: promptData.prompt
        }
      });
    } else {
      return NextResponse.json({ valid: false }, { status: 400 });
    }
    
  } catch (error) {
    return NextResponse.json({ valid: false }, { status: 400 });
  }
}
