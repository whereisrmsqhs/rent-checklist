import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen h-full gap-6 max-w-5xl mx-auto">
      <Card>
        <CardHeader className="pb-1">
          <CardTitle className="text-center text-2xl">
            🇺🇸 집 체크리스트 생성기
          </CardTitle>
          <CardDescription>
            안녕하세요, 미국에서 처음으로 집을 찾을 때 필요한 체크리스트를
            생성해주는 사이트입니다. <br />
            해당 체크리스트를 참고하여 마음에 드시는 집과 계약하셨으면
            좋겠습니다! <br />
            해당 체크리스트 생성기는 설문조사 형식으로 진행되며 약 5~10분 정도
            소유 됩니다. <br />
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end py-1">
          <Popover>
            <PopoverTrigger className="text-sm text-blue-400">
              집 사기 예시
            </PopoverTrigger>
            <PopoverContent className="text-sm">
              - 보증금 반환에 대한 명확한 기준이 없음 (안줄려는 경우가 많습니다)
              <br />
              - 계약 기간에 대해서 말을 바꾸는 경우 <br />
              - 집에서 사용할 수 있는 요리나 빨래에 제약을 거는 경우 <br />
              - 인터넷 또는 에어컨 사용에 제약이 있는 경우 <br />- 등등...
            </PopoverContent>
          </Popover>
        </CardContent>
        <CardContent asChild className="flex justify-center">
          <Button asChild>
            <Link href="/survey">시작</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
