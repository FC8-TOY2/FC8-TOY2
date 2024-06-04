interface UserDataDivProps {
  dataName: string;
  userDataInfo: string | undefined;
}
function UserDataDiv({ dataName, userDataInfo }: UserDataDivProps) {
  return (
    <div className="flex justify-start gap-6">
      <span className="font-semibold">{dataName}</span>
      <span className="text-gray-500">{userDataInfo}</span>
    </div>
  );
}

export default UserDataDiv;
