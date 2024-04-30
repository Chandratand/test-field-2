import { ToggleRightIcon } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';

interface DeleteAlertWrapperProps {
  children: React.ReactNode;
  title?: string;
  onContinue?: () => void;
  onCancel?: () => void;
}

const DeleteAlertWrapper = ({ children, title, onContinue = () => {}, onCancel = () => {} }: DeleteAlertWrapperProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="rounded-lg overflow-hidden">
        <div className="pt-8">
          <div className="bg-primary absolute w-[600px] h-[600px] top-[-130%] left-[-50px] rounded-full" />
          <div className="flex justify-center items-center flex-col gap-8 relative">
            <div className="size-[75px] shadow-md bg-destructive rounded-full flex justify-center items-center text-white">
              <ToggleRightIcon size={45} />
            </div>
            <div className="text-center">
              <AlertDialogTitle>Konfirmasi Hapus</AlertDialogTitle>
              <AlertDialogDescription>Apakah kamu yakin menghapus “{title}”?</AlertDialogDescription>
            </div>
            <AlertDialogFooter className="w-full border-t pt-4">
              <AlertDialogCancel onClick={onCancel}>Batal</AlertDialogCancel>
              <AlertDialogAction onClick={onContinue}>Hapus</AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlertWrapper;
