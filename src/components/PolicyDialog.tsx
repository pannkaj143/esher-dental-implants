import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface PolicyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const PolicyDialog = ({ isOpen, onClose, title, content }: PolicyDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-sm text-gray-600">{content}</div>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyDialog;
