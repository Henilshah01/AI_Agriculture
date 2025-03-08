"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} 
import {
  BookOpen,
  Calendar,
  FileImage,
  Heart,
  Link2,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  PenSquare,
  Share2,
  Tractor,
  User,
  X,
} from "lucide-react"

export default function AgricultureCommunity() {
  const [activeTab, setActiveTab] = useState("all")
  const [posts, setPosts] = useState(initialPosts)
  const [newPostText, setNewPostText] = useState("")
  const [isPostingImage, setIsPostingImage] = useState(false)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [postToDelete, setPostToDelete] = useState(null)

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
          : post,
      ),
    )
  }

  const handleAddComment = (postId, comment) => {
    if (!comment.trim()) return

    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: `comment-${Date.now()}`,
                  user: currentUser,
                  text: comment,
                  timestamp: "Just now",
                  likes: 0,
                  isLiked: false,
                },
              ],
            }
          : post,
      ),
    )
  }

  const handleCreatePost = () => {
    if (!newPostText.trim() && !isPostingImage) return

    const newPost = {
      id: `post-${Date.now()}`,
      user: currentUser,
      text: newPostText,
      image: isPostingImage ? "/placeholder.svg?height=400&width=600" : null,
      timestamp: "Just now",
      likes: 0,
      isLiked: false,
      comments: [],
      location: "Central Valley Farm, CA",
    }

    setPosts([newPost, ...posts])
    setNewPostText("")
    setIsPostingImage(false)
  }

  const handleDeletePost = (postId) => {
    setPostToDelete(postId)
    setShowDeleteAlert(true)
  }

  const confirmDeletePost = () => {
    if (postToDelete) {
      setPosts(posts.filter((post) => post.id !== postToDelete))
      setPostToDelete(null)
    }
    setShowDeleteAlert(false)
  }

  const handleLikeComment = (postId, commentId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                      isLiked: !comment.isLiked,
                    }
                  : comment,
              ),
            }
          : post,
      ),
    )
  }

  const filteredPosts = activeTab === "all" ? posts : posts.filter((post) => post.user.role === activeTab)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-950 border-b shadow-sm py-4">
        <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Tractor className="h-6 w-6 text-green-600" />
            <h1 className="text-xl font-bold">AgriConnect</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium">
              {currentUser.name} ({currentUser.role})
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl py-6 px-4 grid md:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-6">
          {/* Create Post */}
          <Card className="overflow-hidden border-none shadow-md">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="font-medium">{currentUser.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs px-2 py-0 h-5 gap-1 font-normal">
                      {currentUser.role === "farmer" && <Tractor className="h-3 w-3 text-green-600" />}
                      {currentUser.role === "expert" && <BookOpen className="h-3 w-3 text-blue-600" />}
                      {currentUser.role === "student" && <User className="h-3 w-3 text-amber-600" />}
                      <span className="capitalize">{currentUser.role}</span>
                    </Badge>
                    {currentUser.location && (
                      <Badge variant="outline" className="text-xs px-2 py-0 h-5 gap-1 font-normal">
                        <MapPin className="h-3 w-3 text-red-500" />
                        {currentUser.location}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Share your agricultural knowledge or ask a question..."
                className="resize-none mb-3 border-none bg-gray-50 dark:bg-gray-800 focus-visible:ring-green-500"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                rows={3}
              />
              {isPostingImage && (
                <div className="relative mb-3 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Post attachment preview"
                    className="w-full object-cover max-h-[200px]"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => setIsPostingImage(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 gap-2"
                    onClick={() => setIsPostingImage(true)}
                  >
                    <FileImage className="h-4 w-4" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 gap-2">
                    <Link2 className="h-4 w-4" />
                    Link
                  </Button>
                </div>
                <Button
                  onClick={handleCreatePost}
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!newPostText.trim() && !isPostingImage}
                >
                  Post
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-4 w-full bg-white dark:bg-gray-950 p-1 shadow-sm border">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/20 dark:data-[state=active]:text-green-400"
              >
                All Posts
              </TabsTrigger>
              <TabsTrigger
                value="farmer"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/20 dark:data-[state=active]:text-green-400"
              >
                Farmers
              </TabsTrigger>
              <TabsTrigger
                value="expert"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/20 dark:data-[state=active]:text-green-400"
              >
                Experts
              </TabsTrigger>
              <TabsTrigger
                value="student"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700 dark:data-[state=active]:bg-green-900/20 dark:data-[state=active]:text-green-400"
              >
                Students
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Posts Feed */}
          <div className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onLike={handleLike}
                  onAddComment={handleAddComment}
                  onDelete={handleDeletePost}
                  onLikeComment={handleLikeComment}
                  currentUser={currentUser}
                />
              ))
            ) : (
              <Card className="border-none shadow-md">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">
                    <MessageSquare className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No posts found</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    There are no posts in this category yet. Be the first to share your knowledge or ask a question!
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 hidden md:block">
          {/* Community Stats */}
          <Card className="border-none shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white pb-3 pt-6">
              <h3 className="text-lg font-medium">Community Stats</h3>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">1,245</p>
                  <p className="text-sm text-gray-500">Members</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">8,392</p>
                  <p className="text-sm text-gray-500">Posts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">432</p>
                  <p className="text-sm text-gray-500">Experts</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">56</p>
                  <p className="text-sm text-gray-500">Countries</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="border-none shadow-md">
            <CardHeader className="pb-3 pt-6">
              <h3 className="text-lg font-medium">Trending Topics</h3>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                {[
                  { tag: "SustainableFarming", count: 234 },
                  { tag: "OrganicCrops", count: 189 },
                  { tag: "WaterConservation", count: 156 },
                  { tag: "SoilHealth", count: 132 },
                  { tag: "ClimateAdaptation", count: 98 },
                ].map((topic) => (
                  <div key={topic.tag} className="flex items-center justify-between">
                    <Badge variant="outline" className="px-2 py-1 gap-1 font-normal">
                      #{topic.tag}
                    </Badge>
                    <span className="text-sm text-gray-500">{topic.count} posts</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-none shadow-md">
            <CardHeader className="pb-3 pt-6">
              <h3 className="text-lg font-medium">Upcoming Events</h3>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {[
                  {
                    title: "Sustainable Farming Workshop",
                    date: "May 15, 2023",
                    location: "Virtual",
                  },
                  {
                    title: "Annual Agriculture Expo",
                    date: "June 3-5, 2023",
                    location: "Chicago, IL",
                  },
                  {
                    title: "Soil Health Symposium",
                    date: "June 22, 2023",
                    location: "Denver, CO",
                  },
                ].map((event, index) => (
                  <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                    <p className="font-medium">{event.title}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Delete Post Alert Dialog */}
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your post and remove it from the community.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeletePost} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

function PostCard({ post, onLike, onAddComment, onDelete, onLikeComment, currentUser }) {
  const [commentText, setCommentText] = useState("")
  const [showAllComments, setShowAllComments] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const isLongText = post.text.length > 300
  const displayText = isLongText && !isExpanded ? post.text.slice(0, 300) + "..." : post.text

  const visibleComments = showAllComments ? post.comments : post.comments.slice(0, 2)
  const hasMoreComments = post.comments.length > 2

  const handleSubmitComment = (e) => {
    e.preventDefault()
    onAddComment(post.id, commentText)
    setCommentText("")
  }

  const isCurrentUserPost = post.user.id === currentUser.id

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardHeader className="pb-3 pt-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium">{post.user.name}</p>
              <Badge variant="outline" className="text-xs px-2 py-0 h-5 gap-1 font-normal">
                {post.user.role === "farmer" && <Tractor className="h-3 w-3 text-green-600" />}
                {post.user.role === "expert" && <BookOpen className="h-3 w-3 text-blue-600" />}
                {post.user.role === "student" && <User className="h-3 w-3 text-amber-600" />}
                <span className="capitalize">{post.user.role}</span>
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.timestamp}
              </span>
              {post.location && (
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {post.location}
                </span>
              )}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {isCurrentUserPost && (
                <>
                  <DropdownMenuItem className="gap-2">
                    <PenSquare className="h-4 w-4" />
                    Edit post
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 gap-2" onClick={() => onDelete(post.id)}>
                    <X className="h-4 w-4" />
                    Delete post
                  </DropdownMenuItem>
                </>
              )}
              {!isCurrentUserPost && (
                <DropdownMenuItem className="gap-2 text-red-600">
                  <X className="h-4 w-4" />
                  Report
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="mb-2">{displayText}</p>
          {isLongText && (
            <Button variant="link" className="p-0 h-auto text-green-600" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show less" : "Read more"}
            </Button>
          )}
        </div>

        {post.image && (
          <div className="rounded-md overflow-hidden">
            <img
              src={post.image || "/placeholder.svg"}
              alt="Post attachment"
              className="w-full object-cover max-h-[400px]"
            />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className={`h-4 w-4 ${post.isLiked ? "fill-red-500 text-red-500" : ""}`} />
              <span>{post.likes} likes</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments.length} comments</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex flex-col pt-0 px-6">
        <div className="flex justify-between w-full py-2">
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 gap-2 ${post.isLiked ? "text-red-600" : ""}`}
            onClick={() => onLike(post.id)}
          >
            <Heart className={`h-4 w-4 ${post.isLiked ? "fill-current" : ""}`} />
            Like
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 gap-2">
            <MessageSquare className="h-4 w-4" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="w-full space-y-4 py-4">
            {visibleComments.map((comment) => (
              <div key={comment.id} className="flex gap-2">
                <div className="flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2 text-sm">
                    <div className="font-medium flex items-center gap-2">
                      {comment.user.name}
                      <Badge variant="outline" className="text-[10px] px-1 py-0 h-4 gap-1 font-normal">
                        {comment.user.role === "farmer" && <Tractor className="h-2 w-2 text-green-600" />}
                        {comment.user.role === "expert" && <BookOpen className="h-2 w-2 text-blue-600" />}
                        {comment.user.role === "student" && <User className="h-2 w-2 text-amber-600" />}
                        <span className="capitalize">{comment.user.role}</span>
                      </Badge>
                    </div>
                    <p className="mt-1">{comment.text}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-1 ml-2 text-xs text-gray-500">
                    <span>{comment.timestamp}</span>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto text-xs gap-1"
                      onClick={() => onLikeComment(post.id, comment.id)}
                    >
                      <Heart className={`h-3 w-3 ${comment.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                      {comment.likes > 0 && comment.likes}
                      Like
                    </Button>
                    <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {hasMoreComments && (
              <Button
                variant="link"
                className="text-sm p-0 h-auto text-green-600"
                onClick={() => setShowAllComments(!showAllComments)}
              >
                {showAllComments ? "Show less comments" : `View all ${post.comments.length} comments`}
              </Button>
            )}
          </div>
        )}

        {/* Add Comment */}
        <form onSubmit={handleSubmitComment} className="flex gap-2 w-full pt-2">
          <div className="flex-1">
            <Input
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 bg-gray-50 dark:bg-gray-800 border-none focus-visible:ring-green-500"
            />
          </div>
          <Button type="submit" size="sm" className="bg-green-600 hover:bg-green-700" disabled={!commentText.trim()}>
            Post
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

// Mock data
const currentUser = {
  id: "user-1",
  name: "Alex Johnson",
  role: "farmer",
  location: "Central Valley, CA",
}

const initialPosts = [
  {
    id: "post-1",
    user: {
      id: "user-2",
      name: "Dr. Maria Rodriguez",
      role: "expert",
      location: "University of California, Davis",
    },
    text: "New research from our department shows that crop rotation with legumes can increase soil nitrogen by up to 30%. This can significantly reduce the need for synthetic fertilizers while improving soil health and microbial diversity. We've documented increased yields in subsequent seasons, particularly for nitrogen-demanding crops. Has anyone implemented this technique on their commercial farm? I'd love to hear about real-world results and challenges.",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2 hours ago",
    likes: 24,
    isLiked: false,
    location: "UC Davis Research Farm",
    comments: [
      {
        id: "comment-1",
        user: {
          id: "user-3",
          name: "John Smith",
          role: "farmer",
        },
        text: "I've been implementing this rotation system for 3 years now on my 200-acre farm and the soil quality has improved dramatically. Nitrogen levels are up, and I've reduced fertilizer costs by almost 25%. The initial transition was challenging but well worth it.",
        timestamp: "1 hour ago",
        likes: 8,
        isLiked: true,
      },
      {
        id: "comment-2",
        user: {
          id: "user-4",
          name: "Emily Chen",
          role: "student",
        },
        text: "I'm studying this in my sustainable agriculture class. Would love to see some real-world data from farmers who have tried this. Are there specific legume varieties that perform better in different climate zones?",
        timestamp: "45 minutes ago",
        likes: 3,
        isLiked: false,
      },
      {
        id: "comment-3",
        user: {
          id: "user-5",
          name: "Robert Williams",
          role: "farmer",
        },
        text: "We tried this in our semi-arid region with chickpeas and saw good results, but irrigation management became more complex. Would be interested in comparing notes with others in similar climates.",
        timestamp: "30 minutes ago",
        likes: 2,
        isLiked: false,
      },
    ],
  },
  {
    id: "post-2",
    user: {
      id: "user-5",
      name: "Robert Williams",
      role: "farmer",
      location: "Heartland Farms, Iowa",
    },
    text: "Just installed a new drip irrigation system that's supposed to reduce water usage by 40%. The initial investment was significant, but with water becoming increasingly scarce and expensive, I'm hoping for a good ROI within 2-3 seasons. Has anyone else tried these newer systems with soil moisture sensors? Any tips for optimizing them or pitfalls to avoid? Particularly interested in how they perform during heat waves.",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "5 hours ago",
    likes: 18,
    isLiked: true,
    location: "Heartland Farms, Iowa",
    comments: [
      {
        id: "comment-4",
        user: {
          id: "user-6",
          name: "Prof. David Lee",
          role: "expert",
        },
        text: "Make sure to monitor soil moisture levels regularly. The biggest mistake people make is not adjusting based on actual soil conditions and crop growth stage. Consider installing soil moisture sensors at different depths to get a complete picture of your water profile.",
        timestamp: "3 hours ago",
        likes: 7,
        isLiked: false,
      },
      {
        id: "comment-5",
        user: {
          id: "user-7",
          name: "Sarah Johnson",
          role: "student",
        },
        text: "For my senior project, I compared different irrigation systems and found that maintenance is often overlooked in ROI calculations. Make sure to factor in regular cleaning of filters and emitters to maintain efficiency.",
        timestamp: "2 hours ago",
        likes: 4,
        isLiked: true,
      },
    ],
  },
  {
    id: "post-3",
    user: {
      id: "user-7",
      name: "Sarah Johnson",
      role: "student",
      location: "Cornell University",
    },
    text: "Working on my thesis about sustainable pest management in organic farming systems. Looking for farmers willing to share their experiences with integrated pest management techniques, particularly those using beneficial insects and companion planting. I'm especially interested in cost-effectiveness compared to conventional methods. Please comment if you're interested in participating in my research study!",
    image: null,
    timestamp: "1 day ago",
    likes: 12,
    isLiked: false,
    location: "Cornell University",
    comments: [],
  },
  {
    id: "post-4",
    user: {
      id: "user-8",
      name: "Michael Thompson",
      role: "expert",
      location: "Climate Smart Agriculture Initiative",
    },
    text: "Our latest climate models predict significant shifts in growing zones over the next decade. We've developed a free tool to help farmers assess potential impacts on their specific crops and locations. It includes adaptation strategies tailored to your region. Check it out at climatesmartagriculture.org and let me know your thoughts!",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2 days ago",
    likes: 31,
    isLiked: false,
    location: "Washington, DC",
    comments: [
      {
        id: "comment-6",
        user: {
          id: "user-9",
          name: "Lisa Garcia",
          role: "farmer",
        },
        text: "Just tried the tool and it's incredibly helpful. According to the projections, I should consider shifting 20% of my acreage to more drought-tolerant varieties. Thanks for developing this resource!",
        timestamp: "1 day ago",
        likes: 5,
        isLiked: false,
      },
    ],
  },
]

