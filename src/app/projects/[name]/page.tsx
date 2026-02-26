export default async function Project({
    params,
}: {
    params: Promise<{ name: string }>;
}) {
    return <div>Project {(await params).name}</div>;
}