import React from "react";
import { Link } from "react-router-dom";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils";
import { toast } from "react-hot-toast";
import api from "../lib/axios";

const NoteCard = ({ note, onDelete }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) {
      return;
    }
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      if (onDelete) onDelete(id);
    } catch (error) {
      toast.error("Failed to delete note");
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-primary">
      <div className="card-body">
        <Link to={`/note/${note._id}`}>
          <h3 className="card-title text-base-content hover:text-primary transition-colors">
            {note.title}
          </h3>
        </Link>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(note.createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <Link
              to={`/note/${note._id}`}
              className="btn btn-ghost btn-sm btn-square"
            >
              <PenSquareIcon className="size-4" />
            </Link>
            <button className="btn btn-ghost btn-sm btn-square text-error" onClick={(e) => handleDelete(e,note._id)}>
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
